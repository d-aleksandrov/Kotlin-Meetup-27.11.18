package a.guitariz.appwithkotlinlib;

import java.util.HashMap;
import java.util.Map;

import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;

public class TestProClass implements Function3<String, Map<String, String>, Function2<? super Map<String, Object>, ? super Error, Unit>, Unit> {

    @Override
    public Unit invoke(String s, Map<String, String> stringStringMap, Function2<? super Map<String, Object>, ? super Error, Unit> unitFunction2) {
        Map<String, Object> result = new HashMap<>();
        result.put("success", true);

        unitFunction2.invoke(result, null);
        return null;
    }
}
