#include<stdio.h>

int main()
{

int A[] ={5, -2, 3 , 1, 2};
int i,j,k, B = 3, n1=5;

j=0,i=0,k=0;
while(i<B)
{
    if(A[k]>A[n1-1])
    {
        j=A[k]+j;
        k++;
    }
    else
    {
        j=j+A[n1-1];
        n1--;

    }
    i++;
}
printf("%d", j);
}
