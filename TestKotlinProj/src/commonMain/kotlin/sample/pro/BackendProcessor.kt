package sample.pro

fun simpleCabackUser(name:String, onSuccess:(String)->Unit) = onSuccess("Hello, $name!")

fun testWeatherPage(getMethod:(String, Map<String,String>, (Map<String, Any>?, Error?)->Unit)->Unit ){
    val path = "https://samples.openweathermap.org/data/2.5/weather"
    val args = mapOf("id" to "1")
    getMethod(path, args){ result, error ->
        println(result ?: error ?: "Oops...")
    }
}