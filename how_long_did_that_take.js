// ~~~~~~~ Prime Numbers ~~~~~~~~~

Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(num); i++ ) {
        if( num % i === 0 ) {
            return false;
        }
    }
    return true; 
}

// ~~~~~~~ Prime Performance ~~~~~~~~~

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// ~~~~~~~ Fibonacci ~~~~~~~~~
// Which way is faster, recursive or iterative?

// recursive is faster. 
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative is slower (... but not by much)
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

// ~~~~~~~~ Reversing a string ~~~~~~~~~~

// Can we reverse a string more efficiently?
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam \
soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, \
laboriosam vero impedit iusto mollitia optio labore asperiores!";

const reversed1 = story.split("").reverse().join("");

// A more efficient way. For loop:
const reversed2 = story => {
    let backwards = "";
    for (let i=story.length-1; i>=0; i--) {
        backwards += story[i];
    }
    return backwards
}