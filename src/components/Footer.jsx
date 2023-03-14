export default function Footer() {
   const date = new Date() 
   return (
        <footer style={{ textAlign: "center" }}> 
            <h1>© Ireccostyle Anttoinette </h1>
            {/* <a href="https://github.com/Anttoinette" target="_blank" rel="norefferrer"></a> */}
            <p> {date.toLocaleDateString()} </p>
            <a href="https://github.com/Anttoinette" target="_blank">
        <img src="" /> My Github
      </a>
            {/* <script>document.write(new Date().getFullYear())</script> */}
        </footer>
    )
}
// new date().getfull  

