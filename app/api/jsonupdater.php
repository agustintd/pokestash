<?php

// Función para realizar la solicitud a la API de Pokémon TCG
function getPokemonData($url)
{
    $apiKey = '3b0803be-7888-438a-8428-2296dce9011a';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'X-Api-Key: ' . $apiKey
    ));
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

// Obtener los parámetros de la solicitud
$select = isset($_POST['select']) ? $_POST['select'] : '';
$pageSize = isset($_POST['pageSize']) ? $_POST['pageSize'] : '';
$page = isset($_POST['page']) ? $_POST['page'] : '';
$type = isset($_POST['type']) ? $_POST['type'] : '';

// Verificar si la página es "all" y ajustar el pageSize
if ($page === 'all') {
    $pageSize = 250;
    $page = 1;
}

// Inicializar el arreglo donde se almacenarán los resultados
$result = array();

// Realizar la petición a la API de Pokémon TCG
$url = "https://api.pokemontcg.io/v2/$type?select=$select&pageSize=$pageSize&page=$page";
$response = getPokemonData($url);

// Verificar si se obtuvieron datos
if (isset($response['data'])) {
    $result = $response['data'];

    // Si la página es "all", obtener todos los resultados
    if ($page === 1 && $pageSize === 250) {
        $totalCount = $response['totalCount'];
        $pages = ceil($totalCount / 250);

        for ($i = 2; $i <= $pages; $i++) {
            $url = "https://api.pokemontcg.io/v2/$type?select=$select&pageSize=$pageSize&page=$i";
            $response = getPokemonData($url);
            if (isset($response['data'])) {
                $result = array_merge($result, $response['data']);
            }
        }
    }
}

// Devolver la respuesta como JSON
echo json_encode(array("data" => $result));
