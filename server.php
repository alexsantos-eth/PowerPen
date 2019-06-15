<?php
include 'simple_html_dom.php';
$db = mysqli_connect("localhost", "root", "M15@.transito", "powerpen") ;
mysqli_set_charset($db,"utf8");
$func = $_POST['func'];
  function loadContent() {
    $ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://portal.ingenieria.usac.edu.gt/");
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2000);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($ch);
	$state = curl_getinfo($ch)['http_code'];
	$html = new simple_html_dom();
	$html->load($response);
	if($state == 200){
    foreach($html->find('.bt-inner') as $link)
		echo '<news-feed link="https://portal.ingenieria.usac.edu.gt'.$link->children(0)->children(0)->href.'" cache="'.$link->children(0)->children(0)->children(0)->src.'" title="'.str_replace("<br/>", " ", substr($link->children(1), 26, -6)).'" img="http://portal.ingenieria.usac.edu.gt/images/'.substr($link->children(0)->children(0)->children(0)->src, strpos($link->children(0)->children(0)->children(0)->src,"-")+1, -1).'g"></news-feed>';
    }else{
    	http_response_code(408);
   } 
curl_close($ch);
}
if($func == 'on') {
	loadContent();
}

if($func == 'search') {
	$vals = $_POST['vals'];
	$chs = curl_init('http://mate.ingenieria.usac.edu.gt/search_parameters.php');
	curl_setopt($chs, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($chs, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chs, CURLOPT_POSTFIELDS, 'curs=0&type=0&keyword='.$vals.'');
$resp = curl_exec($chs);
$state = curl_getinfo($chs)['http_code'];
	$html = new simple_html_dom();
	$html->load($resp);
	if($state == 200){
    foreach($html->find('[style="color:#000000"]') as $key=>$link){
		if($key > 1 && $key % 2 == 0 && $key < sizeof($html->find('[style="color:#000000"]'))-1){
			$a = $link->children[0]->children[0]->children[0];
			$descr = $link->children[1];
			$dates =  $link->children[3];
		    echo '<file name="'.substr($a, strpos($a,">")+1,-4).'" desc="'.substr($descr, 20,-5).'" total="'.substr($dates, 20,-5).'" link="http://mate.ingenieria.usac.edu.gt/'.$a->href.'"></file>';
        }} 
    }else{
    	http_response_code(408);
   }
curl_close($chs);
	} 



if($func == 'files') {
	
	$dirs = mysqli_query($db, "SELECT * FROM files ORDER BY id DESC");
	while($file=mysqli_fetch_array($dirs)){
	         echo '<note link="./files/'.$file[5].'" name="'.$file[1].'" desc="'.$file[2].'" img="./img/'.$file[4].'" total="'.$file[3].'"></note>' ;
	  } 
	} 

mysqli_close($db);
?>