<?php
    include('getCategories.php');
    include('getCategoryName.php');

    /**
     * Getting products
     */
    $getProducts = "select * from products";
    $runProducts = mysqli_query($con, $getProducts);

    $products = array();
    $i = 0;

    while($rowProducts = mysqli_fetch_array($runProducts)) {
        $oProduct = new stdClass();

        $oProduct->id = $rowProducts['prod_id'];
        $oProduct->name = $rowProducts['prod_name'];
        $oProduct->descr = $rowProducts['prod_descr'];
        $oProduct->price = $rowProducts['prod_price'];
        $oProduct->cat = getCategoryName($rowProducts['prod_cat']);

        array_push($products, $oProduct);

        $i++;
    }
?>