<?php
    /**
     * Getting categories
     */
    $getCategories = "select * from categories";
    $runCategories = mysqli_query($con, $getCategories);

    $categories = array();
    $i = 0;

    while ($rowCategories = mysqli_fetch_array($runCategories)) {
        $oCategory = new stdClass();

        $oCategory->id = $rowCategories['cat_id'];
        $oCategory->name = $rowCategories['cat_name'];

        array_push($categories, $oCategory);

        $i++;
    }
?>