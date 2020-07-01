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
        cls: ".editItemForm",
        id: "#editItemForm_",
        itemName: "#editItemName_",
        itemDescr: "#editItemDescr_",
        itemPrice: "#editItemPrice_",
        itemCat: "#editItemCat_",
        itemErrArr: [],
        itemNameErr: "#editItemNameErr_",
        itemDescrErr: "#editItemDescrErr_",
        itemPriceErr: "#editItemPriceErr_",
        itemCatErr: "#editItemCatErr_",
        launchBtn: ".btn.actions--edit",
        modals: "#editItemModalsWrap > .modal",
        validate: function(formId) {
            var nameFieldErr = "",
                categoryFieldErr = "",
                priceFieldErr = "";

            var nameField = $(menu.editItemForm.itemName + formId);
            if (nameField.val() === "") {
                nameFieldErr = "Item name is required."
                menu.editItemForm.itemErrArr.push(nameFieldErr);
            }
            $(menu.editItemForm.itemNameErr + formId).html(nameFieldErr);

            var categoryField = $(menu.editItemForm.itemCat + formId);
            if (categoryField.val() === "") {
                categoryFieldErr = "Item category is required."
                menu.editItemForm.itemErrArr.push(categoryField);
            }
            $(menu.editItemForm.itemCatErr + formId).html(categoryFieldErr);

            var priceField = $(menu.editItemForm.itemPrice + formId);
            if (priceField.val() === "") {
                priceFieldErr = "Item price is required."
                menu.editItemForm.itemErrArr.push(priceFieldErr);
            } else {
                var priceFieldFormatted = parseFloat(priceField.val()).toFixed(2);
                
                priceField.val(priceFieldFormatted);
            }
            $(menu.editItemForm.itemPriceErr + formId).html(priceFieldErr);
        },
        submit: function(formId) {
            menu.editItemForm.itemErrArr = [];

            menu.editItemForm.validate(formId);

            if (menu.editItemForm.itemErrArr.length > 0) {
                return false; 
            } else {
                return true; 
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

        // Menu list search
        $(menu.mainTable.search).on("keyup", menu.mainTable.filterableTable);

        // addNewItemForm onSubmit
        $(menu.addNewItemForm.id).on("submit", menu.addNewItemForm.submit);

        // deleteItemForm onSubmit
        var deleteItemForms = [...$(menu.deleteItemForm.id)];
        for (var i = 0; i < deleteItemForms.length; i++) {
            deleteItemForms[i].onsubmit = menu.deleteItemForm.submit;
        }

        // Reload the page after closing editItemForm modal
        $(menu.editItemForm.modals).on('hidden.bs.modal', function () {
            location.reload();
        });

        // editItemForm onSubmit
        var editItemForms = [...$(menu.editItemForm.cls)];
        for (var i = 0; i < editItemForms.length; i++) {
            editItemForms[i].onsubmit = function(e) {
                var formIdNumber = e.target.id.match(/\d+/)[0];

                var isSubmissionValid = menu.editItemForm.submit(formIdNumber);

                if (isSubmissionValid) {
                    return true; 
                } else {
                    return false;
                }
            }
        }
    }
};

