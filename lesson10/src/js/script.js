let test = document.getElementsByTagName('div')[0];

class options {
		constructor(height, width, background, fontSize, textAlign) {
				this.height = height;
				this.width = width;
				this.background = background;
				this.fontSize = fontSize;
				this.textAlign = textAlign;

		}
		newDiv() {
			var div = document.createElement('div');
			div.innerHTML = "lorem20";
			// div.style.height = this.height;
			// div.style.width = this.width;
			// div.style.backgroundColor = this.background;
			// div.style.fontSize = this.fontSize;
			// div.style.textAlign = this.textAlign;
		}

}

console.log(test)

const jsDiv = new options(50 , 50 , 'red' , 38 , 'center');

console.log(jsDiv)

console.log(jsDiv.newDiv());

document.createElement(jsDiv.newDiv());