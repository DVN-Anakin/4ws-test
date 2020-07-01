<?php
    /**
     * Get category's name based on its id
     * @param catId <INT> - category's ID
     * @return catName <string> - category's name
     */
    function getCategoryName($catId) {

        global $categories; // array of categories from getCategories.php

        foreach ($categories as $oCat) {
            if($oCat->id === $catId) {
                $catName = $oCat->name;
                return $catName;
            }
        } 
    }
?>