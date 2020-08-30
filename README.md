# What is this?

When sending the contents of an artifact within an email notification, any web and IP addresses need to be “defanged” to prevent the user from inadvertently clicking a malicious link.

This npm package can automatically defang any IP address.

# Installation

`npm i brandtdefang --save`

Then..

```
import { brandtdefang }
from 'brandtdefang';

brandtdefang("255.100.50.0")

// Output: "255[.]100[.]50[.]0"
```