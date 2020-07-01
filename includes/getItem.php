<?php 
    /**
     * getItem(id) - getting product's data
     * @param id - id of the product we want to get
     * @return oProduct - product's data
     */
    function getItem($id) {
        include('db.php');

        $getItemQuery = "SELECT * FROM products where prod_id = '$id'";

        $runGetItemQuery = mysqli_query($con, $getItemQuery); 
        
        while ($rowItems = mysqli_fetch_array($runGetItemQuery)) {
            $oProduct = new stdClass();
    
            $oProduct->id = $id;
            $oProduct->name = $rowItems['prod_name'];
            $oProduct->descr = $rowItems['prod_descr'];
            $oProduct->price = $rowItems['prod_price'];
            $oProduct->cat = $rowItems['prod_cat'];
        }

        return $oProduct;
    }
?>