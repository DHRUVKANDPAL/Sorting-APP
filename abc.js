const btn = document.getElementById('btn');
const edi = document.getElementById('p');
let prev = [];
let sorted = [];
function areAllIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return false;
        }
    }
    return true;
}
function areAllFloatsBetweenZeroAndOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr[i] <= 0 || arr[i] >= 1) {
            return false;
        }
    }
    return true;
}
btn.addEventListener('click', function(e) {
    e.preventDefault();
    let data = parseFloat(document.getElementById('1').value); 
    let data2 = document.getElementById('1').value; 
    console.log(data);
    console.log(typeof data2);
    if (!isNaN(data)) {
        prev.push(data);
        sorted=prev.toSorted(function(a, b) { return a -b; }); 
    } else {
        prev.push(data2);
        sorted=prev.toSorted(); 
    }
    
    document.getElementById('Original').innerHTML = `${prev}`; 
    document.getElementById('1').value = ``
    document.getElementById('Sorted').innerHTML = ``
    document.getElementById('Best').innerHTML=``
    document.getElementById('Avg').innerHTML=``
    document.getElementById('Worst').innerHTML=``
    document.getElementById('xyz').innerHTML=``
});
sortbtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('Sorted').innerHTML = `${sorted}`; 
    document.getElementById('table').classList.remove("is");
    if(document.getElementById('2').value=='1'){
        document.getElementById('Best').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('Avg').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('Worst').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('xyz').innerHTML = `
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        void selectionSort(vector<int>& arr) {
            int n = arr.size();
            for (int i = 0; i < n-1; ++i) {
                int min_index = i;
                for (int j = i+1; j < n; ++j) {
                    if (arr[j] < arr[min_index]) {
                        min_index = j;
                    }
                }
                swap(arr[i], arr[min_index]);
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            selectionSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
    `;
    }
    else if(document.getElementById('2').value=='2'){
        document.getElementById('Best').innerHTML=`O(n)`
        document.getElementById('Avg').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('Worst').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        void bubbleSort(vector<int>& arr) {
            int n = arr.size();
            for (int i = 0; i < n-1; ++i) {
                for (int j = 0; j < n-i-1; ++j) {
                    if (arr[j] > arr[j+1]) {
                        swap(arr[j], arr[j+1]);
                    }
                }
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            bubbleSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        `
    }
    else if(document.getElementById('2').value=='3'){
        document.getElementById('Best').innerHTML=`O(n)`
        document.getElementById('Avg').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('Worst').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        void insertionSort(vector<int>& arr) {
            int n = arr.size();
            for (int i = 1; i < n; ++i) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    --j;
                }
                arr[j + 1] = key;
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            insertionSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        
        `
    }
    else if(document.getElementById('2').value=='4'){
        document.getElementById('Best').innerHTML=`O(n log(n))`
        document.getElementById('Avg').innerHTML=`O(n log(n))`
        document.getElementById('Worst').innerHTML=`O(n log(n))`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        void merge(vector<int>& arr, int left, int middle, int right) {
            int n1 = middle - left + 1;
            int n2 = right - middle;
        
            vector<int> L(n1), R(n2);
        
            for (int i = 0; i < n1; ++i)
                L[i] = arr[left + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[middle + 1 + j];
        
            int i = 0, j = 0, k = left;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    ++i;
                } else {
                    arr[k] = R[j];
                    ++j;
                }
                ++k;
            }
        
            while (i < n1) {
                arr[k] = L[i];
                ++i;
                ++k;
            }
        
            while (j < n2) {
                arr[k] = R[j];
                ++j;
                ++k;
            }
        }
        
        void mergeSort(vector<int>& arr, int left, int right) {
            if (left >= right)
                return;
            int middle = left + (right - left) / 2;
            mergeSort(arr, left, middle);
            mergeSort(arr, middle + 1, right);
            merge(arr, left, middle, right);
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            mergeSort(arr, 0, n - 1);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        `
    }
    else if(document.getElementById('2').value=='5'){
        document.getElementById('Best').innerHTML=`O(n log(n))`
        document.getElementById('Avg').innerHTML=`O(n log(n))`
        document.getElementById('Worst').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        int partition(vector<int>& arr, int low, int high) {
            int pivot = arr[high];
            int i = low - 1;
            for (int j = low; j <= high - 1; ++j) {
                if (arr[j] < pivot) {
                    ++i;
                    swap(arr[i], arr[j]);
                }
            }
            swap(arr[i + 1], arr[high]);
            return i + 1;
        }
        
        void quickSort(vector<int>& arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            quickSort(arr, 0, n - 1);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        `
    }
    else if(document.getElementById('2').value=='6'){
        document.getElementById('Best').innerHTML=`O(n log(n))`
        document.getElementById('Avg').innerHTML=`O(n log(n))`
        document.getElementById('Worst').innerHTML=`O(n log(n))`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        void heapify(vector<int>& arr, int n, int i) {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
        
            if (left < n && arr[left] > arr[largest])
                largest = left;
        
            if (right < n && arr[right] > arr[largest])
                largest = right;
        
            if (largest != i) {
                swap(arr[i], arr[largest]);
                heapify(arr, n, largest);
            }
        }
        
        void heapSort(vector<int>& arr) {
            int n = arr.size();
            for (int i = n / 2 - 1; i >= 0; i--)
                heapify(arr, n, i);
        
            for (int i = n - 1; i > 0; i--) {
                swap(arr[0], arr[i]);
                heapify(arr, i, 0);
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            heapSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        
        `
    }
    else if(document.getElementById('2').value=='7' && areAllIntegers(prev)){
        document.getElementById('Best').innerHTML=`O(n+k)`
        document.getElementById('Avg').innerHTML=`O(n+k)`
        document.getElementById('Worst').innerHTML=`O(n+k)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        #include <algorithm>
        
        using namespace std;
        
        void countingSort(vector<int>& arr) {
            int maxElement = *max_element(arr.begin(), arr.end());
            int minElement = *min_element(arr.begin(), arr.end());
            int range = maxElement - minElement + 1;
        
            vector<int> count(range), output(arr.size());
            for (int i = 0; i < arr.size(); i++)
                count[arr[i] - minElement]++;
        
            for (int i = 1; i < count.size(); i++)
                count[i] += count[i - 1];
        
            for (int i = arr.size() - 1; i >= 0; i--) {
                output[count[arr[i] - minElement] - 1] = arr[i];
                count[arr[i] - minElement]--;
            }
        
            for (int i = 0; i < arr.size(); i++)
                arr[i] = output[i];
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            countingSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        `
    }
    else if(document.getElementById('2').value=='8'){
        document.getElementById('Best').innerHTML=`O(nk)`
        document.getElementById('Avg').innerHTML=`O(nk)`
        document.getElementById('Worst').innerHTML=`O(nk)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <iostream>
        #include <vector>

        using namespace std;

        int getMax(vector<int>& arr) {
            int max = arr[0];
            for (int i = 1; i < arr.size(); i++) {
                if (arr[i] > max)
                    max = arr[i];
            }
            return max;
        }

        void countSort(vector<int>& arr, int exp) {
            int n = arr.size();
            vector<int> output(n), count(10, 0);

            for (int i = 0; i < n; i++)
                count[(arr[i] / exp) % 10]++;

            for (int i = 1; i < 10; i++)
                count[i] += count[i - 1];

            for (int i = n - 1; i >= 0; i--) {
                output[count[(arr[i] / exp) % 10] - 1] = arr[i];
                count[(arr[i] / exp) % 10]--;
            }

            for (int i = 0; i < n; i++)
                arr[i] = output[i];
        }

        void radixSort(vector<int>& arr) {
            int max = getMax(arr);

            for (int exp = 1; max / exp > 0; exp *= 10)
                countSort(arr, exp);
        }

        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<int> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            radixSort(arr);
            cout << "Sorted array: ";
            for (int num : arr) {
                cout << num << " ";
            }
            return 0;
        }

        `
    }
    else if(document.getElementById('2').value=='9' && areAllFloatsBetweenZeroAndOne(prev)){
        document.getElementById('Best').innerHTML=`O(n+k)`
        document.getElementById('Avg').innerHTML=`O(n+k)`
        document.getElementById('Worst').innerHTML=`O(n<sup>2</sup>)`
        document.getElementById('xyz').innerHTML=`
        #include <iostream>
        #include <vector>
        #include <algorithm>
        
        using namespace std;
        
        void bucketSort(vector<float>& arr) {
            int n = arr.size();
            vector<vector<float>> buckets(n);
        
            for (int i = 0; i < n; ++i) {
                int bucketIndex = n * arr[i];
                buckets[bucketIndex].push_back(arr[i]);
            }
        
            for (int i = 0; i < n; ++i)
                sort(buckets[i].begin(), buckets[i].end());
        
            int index = 0;
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < buckets[i].size(); ++j) {
                    arr[index++] = buckets[i][j];
                }
            }
        }
        
        int main() {
            int n;
            cout << "Enter the number of elements: ";
            cin >> n;
            vector<float> arr(n);
            cout << "Enter the elements: ";
            for (int i = 0; i < n; ++i) {
                cin >> arr[i];
            }
            bucketSort(arr);
            cout << "Sorted array: ";
            for (float num : arr) {
                cout << num << " ";
            }
            return 0;
        }
        
        `
    }
    else{
        document.getElementById('Best').innerHTML=`Error`
        document.getElementById('Avg').innerHTML=`Error`
        document.getElementById('Worst').innerHTML=`Error`
        document.getElementById('Sorted').innerHTML = `Error`; 
    }
});