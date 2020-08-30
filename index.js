// IP Address Defanger
// When sending the contents of an artifact within an email notification, any web and IP addresses are automatically “defanged” to prevent the user from inadvertently clicking a malicious link.
// This npm package can automatically defang any IP address.

const brandtdefang = (address) => {
    let answer = "";
    for(let i=0; i<address.length; i++) {
        if(address[i] == ".") {
           answer += "[.]"
        }
        else {
           answer += address[i]; 
        }
    }
    return answer;
};

export default brandtdefang;