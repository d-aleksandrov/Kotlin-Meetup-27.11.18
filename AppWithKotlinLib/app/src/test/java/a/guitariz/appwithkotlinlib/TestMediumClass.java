package a.guitariz.appwithkotlinlib;

import org.jetbrains.annotations.NotNull;

import sample.medium.IDoSomeJoke;

public class TestMediumClass implements IDoSomeJoke {
    @Override
    public boolean isBisy() {
        return false;
    }

    @NotNull
    @Override
    public String joke(@NotNull String s) {
        return IDoSomeJoke.DefaultImpls.joke(this, s);
    }
}
