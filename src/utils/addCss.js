const AddCss = (filename) => {
  var head = document.getElementsByTagName('HEAD')[0]
  var link = document.createElement('link')

  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = filename
  head.appendChild(link)
}

export default AddCss