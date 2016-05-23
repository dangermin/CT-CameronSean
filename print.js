function namePrint(){
	for (x=1; x <= 100; x++){
	    if( x % 3 === 0 ){
	        document.writeln("Cameron");
	    }
	    if( x % 5 === 0 ){
	        document.writeln("Sean");
	    }
	    if( ( x % 3 !== 0 ) && ( x % 5 !== 0 ) ){
	        document.writeln(x);
	    }
	}
}