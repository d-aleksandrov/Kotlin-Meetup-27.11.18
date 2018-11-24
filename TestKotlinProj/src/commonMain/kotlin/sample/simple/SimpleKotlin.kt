package sample

import kotlin.jvm.JvmField

class SimpleKotlin(
    @JvmField val a:Int = 0,
    @JvmField val b:Int = 0,
    @JvmField val description:String? = null){
    fun desc() = "$a:$b; description=$description"
    fun summarize(other:SimpleKotlin) = SimpleKotlin(
        a = a + other.a,
        b = b + other.b,
        description = "$description ${other.description}"
    )
}