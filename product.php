<!DOCTYPE>

<?php 
    include('includes/db.php');
    include('includes/functions.php');
    include('includes/getItem.php');
    include('includes/getCategories.php');
    include('includes/getCategoryName.php');

    $pageTitle = "4WS Test - Product detail";

    if (isset($_GET['id'])){
	
        $prodId = $_GET['id'];

        $oProduct = getItem($prodId);

        $prodName = $oProduct->name;
        $prodDescr = $oProduct->descr;
        $prodPrice = $oProduct->price;
        $prodCat = getCategoryName($oProduct->cat);

        $pageTitle = "4WS Test - " . $prodName;
    }
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
                    <h1><?= $prodName ?></h1>
                </div>
                <div class="col text-right pageTopRightControlBtn">
                    <a href="index.php" target="_blank" id="goToProductList" class="btn btn-success">All products&nbsp;<i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <div class="row">
                        <div class="col-md-5 col-sm-8">
                            <div class="p-3 mb-3 bg-success text-white"><?= $prodCat ?></div>
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
                            <div class="p-3 mb-3 bg-primary text-white"><?= $prodPrice ?> USD</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- scripts -->
        <?php include("includes/components/scripts.php"); ?>
    </body>
</html>