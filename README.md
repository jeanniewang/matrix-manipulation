## HOW TO RUN THIS APP
- Go to root folder (./League_coding_challenge) and install all dependances:
    ```
    npm install
    node app.js
    ```

1. Echo (given)
    - Return the matrix as a string in matrix format.
    ```
    curl "http://localhost:8080/echo?path=matrix.csv"
    ``` 
    - Expected return
    ```
    {"matrix":[[1,2,3],[4,5,6],[7,8,9]]}
    ``` 
2. Invert
    - Return the matrix as a string in matrix format where the columns and rows are inverted
    ```
    curl "http://localhost:8080/invert?path=matrix.csv"
    ``` 
    - Expected return
    ```
    {"Inverted matrix":[[1,4,7],[2,5,8],[3,6,9]]}
    ``` 

3. Flatten
    - Return the matrix as a 1 line string, with values separated by commas.
    ```
    curl "http://localhost:8080/flatten?path=matrix.csv"
    ``` 
    - Expected return
    ```
    {"Flatten matrix":[1,2,3,4,5,6,7,8,9]}
    ``` 
4. Sum
    - Return the sum of the integers in the matrix
    ```
    curl "http://localhost:8080/sum?path=matrix.csv"
    ``` 
    - Expected return
    ```
    {"Flatten matrix":[1,2,3,4,5,6,7,8,9]}
    ``` 

5. Multiply
    - Return the product of the integers in the matrix
        ```
        curl "http://localhost:8080/multiply?path=matrix.csv"
        ``` 
    - Expected return
        ```
        {"Multiplication of this matrix":362880}
        ``` 
6. Handle exception
    - File not found
        ```
        curl "http://localhost:8080/echo?path=test/matrix.csv"
        ``` 
        ```
        // Expected return
        {"error":"File not found"}
        ``` 
    - This matrix contains element that is not a number
        ```
        // Given an uploaded csv file (./League_coding_challenge/test/matrixIncludeNonNumber.csv)
        1,2,3
        1,2,3
        4,5,f
        ``` 
        ```
        curl "http://localhost:8080/echo?path=test/matrixIncludeNonNumber.csv"
        ``` 
        ```
        // Expected return
        {"error":"This matrix contains element that is not a number"}
        ``` 

    - The data in the input file is Not a matrix
        ```
        // Given an uploaded csv file (./League_coding_challenge/test/matrixFaulty.csv)
        1,2,3
        1,2
        ``` 
        ```
        curl "http://localhost:8080/echo?path=test/matrixFaulty.csv"
        ``` 
        ```
        // Expected return
        {"error":"This is NOT a matrix"}
        ```
    - The number of rows are NOT equal to the number of columns in this matrix
        ```
        // Given an uploaded csv file (./League_coding_challenge/test/matrixnonsquare.csv)
        1,2,3,4
        1,2,3,4
        4,5,6,4
        ``` 
        ```
        curl "http://localhost:8080/echo?path=test/matrixnonsquare.csv"
        ``` 
        ```
        // Expected return
        {"error":"The number of rows are NOT equal to the number of columns in this matrix"}
        ```
    - The Echo function is robust and can trim element in this matrix
        ```
        // Given an uploaded csv file (./League_coding_challenge/test/matrixfortriming.csv)
        1,2, 3  
        4,  5  ,6
        7,8 ,9
        ``` 
        ```
        curl "http://localhost:8080/echo?path=test/matrixfortriming.csv"
        ``` 
        ```
        // Expected return
        {"matrix":[[1,2,3],[4,5,6],[7,8,9]]}
        ```


## Unit test for all the core functions: Echo, Invert, Flatten, Sum, Multiply
- Go to root folder (./League_coding_challenge):
    ```
    npm run test
    ```
    ```
    // expected output
    Matrix Manipulation
    √ should return error that This matrix contains element that is not a number
    √ should return error that This is NOT a matrix
    √ shold return error The number of rows are NOT equal to the number of columns in this matrix
    √ should trim and read the data in this matrix
    √ should read the matrix
    √ should invert the matrix 
    √ should flatten the matrix
    √ should return the sum of elements in this matrix
    √ should return the mulplication of elements in this matrix
    ```

