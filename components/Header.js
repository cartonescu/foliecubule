export default function Header({ title }) {
  return <h1 className="title">{title}</h1>
}
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<meta name="description" content="Folie cu bule ieftina, Folie bule impachetat - Folie cu bule ieftina - Folie bule ambalare - Folie cu bule de aer!" />
<link rel="canonical" href="https://foliecubule.netlify.app" />
<meta name="robots" content="index, follow">
<style type="text/css">
@import url(http://fonts.googleapis.com/css?family=Abel);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

body { background-color:#fefdfb; color: #555; font-family: 'Abel', sans-serif; font-size: 93%; font-weight:normal;margin: 0; }
a:link, a:visited, a:active{ color:inherit; text-decoration: none; }
a:hover {color: #000; text-decoration:underline; }

.right {text-align:right; }
.hide {display: none;}

nav {
    display: table;
    table-layout: fixed;
    width: 75%;
    margin: 0 auto;
}

#menu {
    width:100%;
    min-height:35px;
    background-color: #000;
    position:fixed;
    z-index:100;
    top:0; left:0;
}

#menu a {
    background-color:inherit;
    color: #fff;
}

ul#topnav  {
    display: table-row;
    padding: 0;
    overflow: hidden;
    position:relative;
    bottom:0;
}

ul#topnav li {
    list-style-type: none;
    display: table-cell;
    text-align:center;
    vertical-align:middle;
}

ul#topnav li a {
    display:block;
    padding:8px;
    text-decoration:underline;
}


ul#topnav li a:hover {
    color:#777;
    text-decoration:none;
}

ul#topnav li> ul {
    list-style-type: none;
    margin:0;
    padding:0;
}


ul#topnav li> ul > li{
	font-size:120%;
    float:left;
    display:inline;
    padding-right:5px;
}
    
#container {
    width:100%;
    margin-top:48px;
}

#pageheader {
    display:table;
    width:80%;
    margin:auto;
}

.section {
    width:80%;
    border-top:1px solid #777;
    padding:20px 0;
    margin:auto;
}

.pageitem {
    display:table;
    table-layout:fixed;
    width:100%;
    margin-bottom:15px;
    padding-top:15px;
    text-align:justify;
}

.pageitem h1 {
    font-size:250%;
    font-weight:normal;
    color:#555;
    margin:0;
    text-align:left;
}

.pageitem h2 {
    font-size:180%;
    background-color:inherit;
    color:#444;
    margin-top:0;
}

.pageitem p {
    padding:0;
    margin:1em 0;
    font-size:115%;
    line-height:175%;
}

.pageitem a {
	text-decoration:underline;
}

.pageitem .col {
     padding:0 2% 0 1%;    
}

.col {
    display: table-cell;
}

#footer {
    display:table;
    width:100%;
    margin-bottom:15px;
    padding:15px 0;
    text-align:left;
    font-size:89%;
    color:#999;
}

#footer p {
     text-align:left;
     padding:0;
}

#credits {
    display:table;
    table-layout:fixed;
    width:100%;
    font-size:12px;
    color:#777;
    line-height:100%;
    text-align:center;
}

#show-menu  {display:none;}
.open, .close { background-color:inherit; color:#fff; text-align:right; font-weight:normal; font-size:1.5em; padding: 0; position:absolute; top:10%; right:5%; display:none; }


/* start make items responsive */
@media screen and (max-width : 1024px){


/* menu */
ul#topnav {display:none;}
.hide, .open { display:block;}


#show-menu:checked ~ .open {display:none;}
#show-menu:checked ~ .close {font-size:1.6em; display:block;}
#show-menu:checked ~ ul#topnav { display: block; position: absolute; top:100%; right:0%; width:100%; margin:0; margin-bottom:1%; overflow:visible; }
ul#topnav li { display: block; text-align:center; margin:0; background-color:#000; padding:1% 0;}

ul#topnav li a { display: block; padding-right:0%; padding-bottom:5px; text-decoration:none;}
ul#topnav li a:hover {text-decoration:underline;}


ul#topnav li> ul { display:table; float:none; table-layout:fixed; margin:0 auto;}
ul#topnav li> ul > li {padding-left:10px; }

/* other items */
.pageitem h2 {font-size:120%;}
.pageitem p { padding:0; line-height:150%; font-size:99%;}
.pageitem .col {padding:0 3% 0 2%; }

}

@media screen and (max-width : 700px){

.col { float:left; margin:auto; width:100%; margin-bottom:10%;}
#credits p { text-align:center; margin-bottom:-10%;}

}
/* end make items responsive */
</style>
