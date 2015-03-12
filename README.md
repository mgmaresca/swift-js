# swift-js

# A JavaScript implementation of OpenStack Horizon component 

This is a web portal developed using only in JavaScript, based on OpenStack Horizon.


## License

The MIT License

Copyright (C) 2012 Universidad Politécnica de Madrid.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Installation Guide

<ol>
	<li>Install necessary components:</li>
	<pre>
		sudo apt-get install make g++
		sudo apt-get install python-software-properties
		sudo add-apt-repository ppa:chris-lea/node.js
		sudo apt-get update
		sudo apt-get install nodejs npm git ruby1.9.3‏

		sudo gem install sass
	</pre>

	<li>Clone the repository to your workspace and change to the <code>fi-ware-cloud-portal</code> new directory</li>
	<pre>
		git clone git://github.com/ging/fi-ware-cloud-portal.git

		cd fi-ware-cloud-portal
	</pre>

	<li>Copy <code>config.js.template</code> to <code>config.js</code> in <code>fi-ware-cloud-portal</code> directory</li>
	<pre>
		cp config.js.template config.js
	</pre>

	<li>Log in Cloud Portal (https://account.lab.fiware.org/) and head to your account details </li>
	
	<br /> 
	
	<li>Register a new application</li>
	You'll have to configure <sample>url</sample> as <sample>http://localhost</sample> and <sample>callback url</sample> as <sample>http://localhost/login</sample>
	
</ol>
