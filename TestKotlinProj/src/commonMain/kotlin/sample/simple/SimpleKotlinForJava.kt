package sample

class SimpleKotlinForJava(a:Int? = null, b:Int? = null, description:String? = null){
    val a = a ?: 0
    val b = b ?: 0
    val description = description ?: ""

    fun desc() = "$a:$b; description=$description"
    fun summarize(other:SimpleKotlin) = SimpleKotlin(
        a = a + other.a,
        b = b + other.b,
        description = "$description ${other.description}"
    )
}