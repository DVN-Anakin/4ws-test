<?php
    /**
     * safeInputData(data) - converts <input>'s value into secure format
     * @param data - <input>'s value
     * @return secureData <string> - converted secure value 
     */
    function safeInputData($data) {
        $secureData = $data;
        $secureData = trim($secureData);
        $secureData = stripslashes($secureData);
        $secureData = htmlspecialchars($secureData);

        return $secureData;
    }

    /**
     * matchesAnyUnicodeLetter(data) - checks if data contains only Unicode letters and numbers
     * @param data - data we want to check
     * @return  <boolean> - validation result
     */
    function matchesAnyUnicodeLetter($data) {
        return preg_match("/^[a-zA-Z ]*$/", $data);
    }

    /**
     * matchesEmailFormat(data) - checks if data is an email
     * @param email - data we want to check
     * @return <boolean> - validation result
     */
    function matchesEmailFormat($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    /**
     * matchesURLformat(url) - checks if data is an email
     * @param url - data we want to check
     * @return <boolean> - validation result
     */
    function matchesURLformat($url) {
        return preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $url);
    }
    
?>