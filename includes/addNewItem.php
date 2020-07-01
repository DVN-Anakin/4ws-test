<?php 
    if (isset($_POST['newItem'])) {

        $newItemName = safeInputData($_POST['newItemName']);
        $newItemDescr = safeInputData($_POST['newItemDescr']);
        $newItemPrice = safeInputData($_POST['newItemPrice']);
        $newItemCat = safeInputData($_POST['newItemCat']);
        
        $insertItemQuery = "INSERT INTO products (prod_name, prod_descr, prod_price, prod_cat) VALUES ('$newItemName', '$newItemDescr', '$newItemPrice', '$newItemCat')";

        $runInsertItemQuery = mysqli_query($con, $insertItemQuery); 
        
        if($runInsertItemQuery) {
            echo "<script>alert('New item sucessfully added.')</script>";
            echo "<script>window.open('index.php','_self')</script>";
        }
    }
?>

<aside>
    <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="addItemModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add new item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
                        <div class="form-group">
                            <label for="newItemName" class="col-form-label">Name:&nbsp;*</label>
                            <input type="text" class="form-control" id="newItemName" name="newItemName" placeholder="Item name" value="">
                            <span id="newItemNameErr" class="error"></span>
                        </div>
                        <div class="form-group">
                            <label for="newItemDescr" class="col-form-label">Description:</label>
                            <textarea class="form-control" id="newItemDescr" name="newItemDescr" placeholder="Item decription" value=""></textarea>
                            <span id="newItemDescrErr" class="error"></span>
                        </div>
                        <div class="form-group row">
                            <div class="col">
                                <label for="newItemCat" class="col-form-label">Category:&nbsp;*</label>
                                <select id="newItemCat" class="form-control" name="newItemCat">
                                    <option value="">Select category</option>
                                    <?php foreach($categories as $oCat) { 
                                        $newItemCatId = $oCat->id;
                                        $newItemCatName = $oCat->name; 
                                    ?>
                                        <option value=<?php echo $newItemCatId; ?>><?php echo $newItemCatName; ?></option>
                                    <?php } ?>
                                </select>
                                <span id="newItemCatErr" class="error"></span>
                            </div>
                            <div class="col">
                                <label for="newItemPrice" class="col-form-label">Price <small><i>(E.g. 3.99)</i></small>&nbsp;:&nbsp;*</label>
                                <input type="number" step="0.10" class="form-control" id="newItemPrice" name="newItemPrice" value="">
                                <span id="newItemPriceErr" class="error"></span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <span type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</span>
                            <button type="submit" class="btn btn-primary" name="newItem">Add item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</aside>