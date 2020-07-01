<!DOCTYPE>

<?php 
    include('includes/db.php');
    include('includes/functions.php');
    include("includes/menuList.php");
    include("includes/deleteItem.php");

    $pageTitle = "Menu list";
?>

<html lang="en-US">
    <head>
        <?php include("includes/components/head.php"); ?>
    </head>
    <body>

        <?php include("includes/components/header.php"); ?>

        <main class="container my-5">
            <div class="row">
                <div class="col">
                    <h1>Menu List</h1>
                </div>
                <div class="col text-right pageTopRightControlBtn">
                    <button id="addItem" class="btn btn-success" data-toggle="modal" data-target="#addItemModal"><i class="fas fa-plus"></i>&nbsp;Add item</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <input class="form-control" id="menuTableSearch" type="text" placeholder="Search the menu ...">
                    <br>
                    <table id="menuTable" class="menuTable table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($products as $product) { ?>
                                <tr>
                                    <td class="align-middle"><?= $product->id ?></td>
                                    <td class="align-middle"><?= $product->name ?></td>
                                    <td class="align-middle"><?= $product->price ?></td>
                                    <td class="align-middle"><?= $product->cat ?></td>
                                    <td class="align-middle actions">
                                        <a href="product.php?id=<?= $product->id ?>" target="_blank" class="btn btn-info" title="View product page"><i class="far fa-eye"></i></a>
                                        <button id="editItem_<?= $product->id ?>" class="btn btn-warning actions--edit" data-toggle="modal" data-target="#editItemModal_<?= $product->id ?>" title="Edit item ID: <?= $product->id ?>">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form class="actions--delete" action="" method="post">
                                            <button name="deleteItem" type="submit" class="btn btn-danger" title="Delete item ID: <?= $product->id ?>" value="<?= $product->id ?>"><i class="fas fa-times"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

        <aside>
            <div id="addNewItemModalsWrap">
                <?php include("includes/addNewItem.php"); ?>
            </div>
            <div id="editItemModalsWrap">
                <?php foreach ($products as $product) {
                    $prodId = $product->id;
                    $prodName = $product->name;
                    $prodDescr = $product->descr;
                    $prodPrice = $product->price;
                    $prodCat = $product->cat;

                    include("includes/editItem.php");
                } ?>
            </div>
        </aside>

        <!-- scripts -->
        <?php include("includes/components/scripts.php"); ?>
    </body>
</html>