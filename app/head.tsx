import Script from 'next/script'

export default function Head() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <Script id="google-analytics">
                {`
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
         
                  ga('create', 'G-YY5Y67JSHK', 'auto');
                  ga('send', 'pageview');
                `}
            </Script>
        </>
    )
}
