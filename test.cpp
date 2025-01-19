// Don’t cry in a corner, if you want something, mehnat kar, best ban, aur cheen le.
// Boy's Nobody come here to save you have to fight alone with a smile face.

#include <iostream>
#include <bits/stdc++.h>
using namespace std;
#include <ext/pb_ds/tree_policy.hpp>
#define M 1000000007
#define ll long long
#define int long long
#define arr vector<int>v(n);
#define END cout<<endl;
#define nn int n;cin >> n;
#define string1 string s;cin >> s;
#define loop(n) for (auto i = 0; i < n; i++)
#define lop(n) for (auto j = 0; j < n; j++)
#define takearr(n)  for (auto i = 0; i < n; i++){cin>>v[i];}
#define takestr(n) for(int i=0;i<n;i++){char ch; cin>>ch; s+=ch;}
#define srt   sort(v.begin(),v.end());	
#define srtr   sort(v.rbegin(),v.rend());
#define loophalf(n) for (int i = n / 2 - 1; i < n; i++)
#define lop2(n) for (auto j = 1; j <= n; j++)
#define dgb(...) ;
#define debug(...) ;
#define crndl
#define YES cout<<"YES"<<endl;
#define NO cout<<"NO"<<endl;
int sieve[1000005];
int v[1000005];

void sieveOfEratosthenes() {
	memset(sieve, 0, sizeof(sieve));
	sieve[0] = 0;
	sieve[1] = 0;
	for (int i = 2; i < 1000005; i++) {
		if (sieve[i] != 0) {
			continue;
		}
		for (int j = i; j < 1000005; j += i) {
			if (sieve[j] == 0) sieve[j] = i;
		}
	}
}
string lshift(string s) {
	return s.substr(1, s.length() - 1) + s.substr(0, 1);
}
string rshift(string s) {
	return s.back() + s.substr(0, s.length() - 1);
}
struct point {
	int x, y;
	bool operator<(const point &p) {
		if (x == p.x) return y < p.y;
		else return x < p.x;
	}
};
bool isprime(int n) {
	for (int i = 2; i <= sqrt(n); i++) {
		if (n % i == 0)
			return false;
	}
	return true;
}
bool cmp(vector<int>&a , vector<int>&b) {
	return a < b;
}
int fin(int n) {
	return (n * (n + 1)) / 2;
}
int powM(int x , int n) {
	x %= M;
	if (n == 0) return 1;
	else if (n == 1) return x;
	int y = powM(x * x , n / 2);
	if (n % 2) {
		return y * x % M;
	}
	else {
		return y;
	}
}
int pow(int x , int n) {
	if (n == 0) return 1;
	else if (n == 1) return x;
	int y = pow(x * x , n / 2);
	if (n & 1) {
		return y * x;
	}
	else {
		return y;
	}
}
int fun(vector<int>&arr1 , vector<int>&arr2) {

	auto it = remove_if(arr2.begin(), arr2.end(), [&arr1](int num) {
		return find(arr1.begin(), arr1.end(), num) != arr1.end();
	});
	arr2.erase(it, arr2.end());
	return arr2.size();
}
bool allEqual( vector<int>&v) {
	for (int i = 1; i < v.size(); i++) {
		if (v[i] != v[i - 1]) {
			return false;
		}
	}
	return true;
}

int msb(int n) {
	for (int i = 32; i > 0; i--) {
		if (n & (1LL << i)) {
			return i;
		}
	}
	return 0;

}
void solve()
{
	int n;
	cin >> n;
	vector<int>v(n+1);
	for (int i = 1; i <= n; i++) {
		cin >> v[i];
	}
	unordered_map<int, int>mp;

	for (int i = 1; i <= n; i++) {
		mp[v[i]] = i;
	}
	int sum = 0;
	for(auto i:mp){
		sum += i.second;
	}
	cout<<sum<<endl;
}
signed main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);
	int t;
	cin >> t;
	while (t-- > 0)
	{
		debug(testcase, tc);
		solve();
		crndl;
	}
	return 0;
}