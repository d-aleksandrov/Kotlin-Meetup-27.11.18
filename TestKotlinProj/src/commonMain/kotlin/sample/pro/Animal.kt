package sample.pro

sealed class Animal {
    abstract fun sound(): String

    class Dog(private val bone: Boolean? = false) : Animal() {
        override fun sound(): String = if (bone == true)
            "woof!"
        else
            "..."
    }

    object Mice : Animal() {
        override fun sound(): String = "pee"
    }

    class Cat(private val mice: Mice? = null) : Animal() {
        override fun sound(): String = mice?.let { "meow" } ?: "..."
    }

    internal class Cow(private val grass:Boolean? = false):Animal(){
        override fun sound(): String = if (grass == true)
            "Moow"
        else
            "..."
    }
}