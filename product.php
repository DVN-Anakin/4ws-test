<!DOCTYPE>

<?php 
    include('includes/db.php');
    include('includes/functions.php');
    include('includes/getItem.php');
    include('includes/getCategories.php');
    include('includes/getCategoryName.php');

    $pageTitle = "Product detail";

    if (isset($_GET['id'])) {
	
        $prodId = $_GET['id'];

        $oProduct = getItem($prodId);

        $prodName = $oProduct->name;
        $prodDescr = $oProduct->descr;
        $prodPrice = $oProduct->price;
        $prodCat = getCategoryName($oProduct->cat);

        $pageTitle = $prodName;
    }
?>

<html lang="en-US">
    <head>
        <?php include("includes/components/head.php"); ?>
    </head>
    <body>

        <?php include("includes/components/header.php"); ?>

        <main class="container my-5">

            <?php if (isset($_GET['id'])) { ?>

                <div class="row">
                    <div class="col">
                        <h1><?= $prodName ?></h1>
                        <br />
                        <small><i>Product ID: <?= $prodId ?></i></small>
                    </div>
                    <div class="col text-right pageTopRightControlBtn">
                        <a href="index.php" target="_blank" id="goToProductList" class="btn btn-success">All products&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <div class="row">
                            <div class="col-md-5 col-sm-8">
                                <div class="p-3 mb-3 bg-success text-white"><strong><i><?= $prodCat ?></i></strong></div>
                            </div>
                        </div>
                        <?php if ($prodDescr !== "") { ?>
                            <div class="row">
                                <div class="col-md-5 col-sm-8">
                                    <div class="p-3 mb-3 bg-info text-white"><?= $prodDescr ?></div>
                                </div>
                            </div>
                        <?php } ?>
                        <div class="row">
                            <div class="col-md-5 col-sm-8">
                                <div class="p-3 mb-3 bg-primary text-white text-right"><strong><?= $prodPrice ?> USD</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

            <?php } else { ?>

                <div class="row">
                    <div class="col">
                        <h1>See all products&nbsp;&nbsp;<i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></h1>
                    </div>
                    <div class="col text-right pageTopRightControlBtn">
                        <a href="index.php" target="_blank" id="goToProductList" class="btn btn-success">All products&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>

            <?php } ?>

        </main>

        <!-- scripts -->
        <?php include("includes/components/scripts.php"); ?>
    </body>
</html>