<?php 
    if (isset($_POST['deleteItem'])) {

        $itemIdToDelete = safeInputData($_POST['deleteItem']);

        $deleteItemQuery = "DELETE FROM products WHERE prod_id=" . $itemIdToDelete; 

        $runDeleteItemQuery = mysqli_query($con, $deleteItemQuery);
        
        if($runDeleteItemQuery) {
            echo "<script>alert('Item sucessfully deleted.')</script>";
            echo "<script>window.open('index.php','_self')</script>";
        }
    }
?>