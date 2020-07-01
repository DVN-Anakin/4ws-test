<!DOCTYPE>

<?php 
    include('includes/db.php');
    include('includes/functions.php');
    include("includes/menuList.php");
    include("includes/deleteItem.php");
?>

<html lang="en-US">
    <head>
        <!-- General meta tags needed-->
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <!-- Needed for responsive design -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- If you want custom browser colors on mobile -->
        <!-- <meta name="theme-color" content="#1843c1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1843c1"> -->

        <title>4WS Test - Menu list</title>
        
        <!-- styles -->
        <link rel="stylesheet" href="dist/assets/css/main.css">

        <!-- fonts -->
        <script src="https://kit.fontawesome.com/ffc90a4089.js" crossorigin="anonymous"></script>
    </head>
    <body>

        <header class="bg-dark">
            <nav class="navbar navbar-dark bg-dark container">
                <span class="navbar-brand mb-0 h1">4WS Test</span>
            </nav>
        </header>

        <main class="container my-5">
            <div class="row">
                <div class="col">
                    <h1>Menu List</h1>
                </div>
                <div class="col text-right addItem">
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
                                        <button class="btn btn-info"><i class="far fa-eye"></i></button>
                                        <button id="editItem_<?= $product->id ?>" class="btn btn-warning actions--edit" data-toggle="modal" data-target="#editItemModal_<?= $product->id ?>" title="Edit item ID: <?= $product->id ?>">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form class="actions--delete" action="" method="post">
                                            <button name="deleteItem" type="submit" class="btn btn-danger" value="<?= $product->id ?>"><i class="fas fa-times"></i></button>
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
        <script src="dist/assets/js/vendors/jquery-3.5.1.slim.min.js"></script>
        <script src="dist/assets/js/vendors/popper.min.js"></script>
        <script src="dist/assets/js/vendors/bootstrap.min.js"></script>
        <script src="dist/assets/js/main.js"></script>
    </body>
</html>