
import convertToHTML from 'markdown-to-html-converter'

export default function HTML () {
    const markdownStr = '# Example \nThis is my example text';
  
    const htmlStr = convertToHTML(markdownStr);
    console.log(htmlStr)

    return (
      <div>
        {htmlStr}
  
      </div>
      
      )
  }