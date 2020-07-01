<div class="modal fade" id="editItemModal_<?= $prodId ?>" tabindex="-1" role="dialog" aria-labelledby="editItemModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit item (ID: <?= $prodId ?>)</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label for="editItemName" class="col-form-label">Name:&nbsp;*</label>
                        <input type="text" class="form-control" id="editItemName_<?= $prodId ?>" name="editItemName" placeholder="Item name" value="<?= $prodName ?>">
                        <span id="editItemNameErr_<?= $prodId ?>" class="error"></span>
                    </div>
                    <div class="form-group">
                        <label for="editItemDescr" class="col-form-label">Description:</label>
                        <textarea class="form-control" id="editItemDescr_<?= $prodId ?>" name="editItemDescr" placeholder="Item decription"><?= $prodDescr ?></textarea>
                        <span id="editItemDescrErr_<?= $prodId ?>" class="error"></span>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <label for="editItemCat" class="col-form-label">Category:&nbsp;*</label>
                            <select id="editItemCat_<?= $prodId ?>" class="form-control" name="editItemCat">
                                <?php foreach($categories as $oCat) { 
                                    $editItemCatId = $oCat->id;
                                    $editItemCatName = $oCat->name;
                                    $editItemCatSelected = ($editItemCatName === $prodCat) ? 'selected="selected"' : '';
                                ?>
                                    <option value="<?= $editItemCatId; ?>" <?= $editItemCatSelected ?>>
                                        <?= $editItemCatName; ?>
                                    </option>
                                <?php } ?>
                            </select>
                            <span id="editItemCatErr_<?= $prodId ?>" class="error"></span>
                        </div>
                        <div class="col">
                            <label for="editItemPrice" class="col-form-label">Price <small><i>(E.g. 3.99)</i></small>&nbsp;:&nbsp;*</label>
                            <input type="number" step="0.10" class="form-control" id="editItemPrice_<?= $prodId ?>" name="editItemPrice" value="<?= $prodPrice ?>">
                            <span id="editItemPriceErr_<?= $prodId ?>" class="error"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <span type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</span>
                        <button type="submit" class="btn btn-primary" name="updateItem">Update item</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>