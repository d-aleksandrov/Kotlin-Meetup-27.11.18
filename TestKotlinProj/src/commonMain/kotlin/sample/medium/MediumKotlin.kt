package sample.medium

interface IDoSomeJoke {
    val isBisy: Boolean

    fun joke(name: String): String {
        return when {
            name.endsWith("ny") -> "$name-pony"
            name.endsWith("ax") -> "$name-fax"
            else -> "I don't know good jokes, $name"
        }
    }
}

object JokeProcessor {
    fun tryToJoke(name: String? = null, joker: IDoSomeJoke? = null): String? {
        name ?: return null
        joker ?: return null

        return if(joker.isBisy)
            "Sorry, Joker is busy"
        else
            joker.joke(name)
    }
}