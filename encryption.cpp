#include<bits/stdc++.h>
using namespace std;
int main(){
string s1,s2;
cin>>s1;
cin>>s2;
for(int i=0;i<s2.length();i++){
   for(int j=0;j<s1.length();j++){
   if(s2[j] == 'R')
   i++;
   else if(s2[j] == 'L')
   i--;
   else if(s2[j] == 'T')
   (int)s1[i]++;
   else if(s2[j] == 'D')
   (int)s1[i]--;
   else if(s2[j] == 'S')
   swap(s1[s2[i+1]] == s1[j]);
}
}
cout<<s1;
}