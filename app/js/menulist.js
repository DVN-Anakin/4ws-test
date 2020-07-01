var menu = {
    mainTable: {
        id: "#menuTable",
        data: "#menuTable tbody",
        search: "#menuTableSearch",
        filterableTable: function() {
            var value = $(this).val().toLowerCase();

            $(menu.mainTable.data + " tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
    },
    deleteItemForm: {
        id: "form.actions--delete",
        submit: function() {
            if (confirm("Do you really want to delete this item?") == true) {
                return true;
            } else {
                return false;
            }
        }
    },
    editItemForm: {
        id: "form.actions--delete",
        launchBtn: ".btn.actions--edit",
        validate: function() {

        },
        submit: function() {
            if (confirm("Do you really want to delete this item?") == true) {
                return true;
            } else {
                return false;
            }
        }
    },
    addNewItemForm: {
        id: "#addItemModal form",
        itemName: "#newItemName",
        itemDescr: "#newItemDescr",
        itemPrice: "#newItemPrice",
        itemCat: "#newItemCat",
        itemErrArr: [],
        itemNameErr: "#newItemNameErr",
        itemDescrErr: "#newItemDescrErr",
        itemPriceErr: "#newItemPriceErr",
        itemCatErr: "#newItemCatErr",
        validate: function() {
            var nameFieldErr = "",
                categoryFieldErr = "",
                priceFieldErr = "";

            var nameField = $(menu.addNewItemForm.itemName);
            if (nameField.val() === "") {
                nameFieldErr = "Item name is required."
                menu.addNewItemForm.itemErrArr.push(nameFieldErr);
            }
            $(menu.addNewItemForm.itemNameErr).html(nameFieldErr);

            var categoryField = $(menu.addNewItemForm.itemCat);
            if (categoryField.val() === "") {
                categoryFieldErr = "Item category is required."
                menu.addNewItemForm.itemErrArr.push(categoryField);
            }
            $(menu.addNewItemForm.itemCatErr).html(categoryFieldErr);

            var priceField = $(menu.addNewItemForm.itemPrice);
            if (priceField.val() === "") {
                priceFieldErr = "Item price is required."
                menu.addNewItemForm.itemErrArr.push(priceFieldErr);
            } else {
                var priceFieldFormatted = parseFloat(priceField.val()).toFixed(2);
                
                priceField.val(priceFieldFormatted);
            }
            $(menu.addNewItemForm.itemPriceErr).html(priceFieldErr);
        },
        submit: function() {
            menu.addNewItemForm.itemErrArr = [];

            menu.addNewItemForm.validate();

            if (menu.addNewItemForm.itemErrArr.length > 0) {
                return false;
            } else {
                return true;
            }
        }
    },
    init: function() {
        $(menu.mainTable.search).on("keyup", menu.mainTable.filterableTable);

        $(menu.addNewItemForm.id).on("submit", menu.addNewItemForm.submit);

        var deleteItemForms = [...$(menu.deleteItemForm.id)];
        for (var i = 0; i < deleteItemForms.length; i++) {
            deleteItemForms[i].onsubmit = menu.deleteItemForm.submit;
        }
    }
};

