function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
	// edge case when string s1 s2 empty 
	if(s1.length==="")return -1;
	if(s2.length==="")return 0;

	const lowers1 = s1.toLowerCase();
	const lowers2 = s2.toLowerCase();
    return lowers1.indexOf(lowers2);
}
//Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

	
