package android.tairone.kinvo.ui.main;

import android.content.Context;
import android.support.test.InstrumentationRegistry;
import android.support.v7.widget.RecyclerView;
import android.tairone.kinvo.R;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;


import static org.junit.Assert.*;

public class ProductsFragmentTest {

    private Context appContext;
    private View view;

    @Before
    public void setUp() throws Exception {
        appContext = InstrumentationRegistry.getTargetContext();
        LayoutInflater inflater = LayoutInflater.from(appContext);
        view = inflater.inflate(R.layout.fragment_products, null);
    }

    @Test
    public void testLaunch() {
        assertNotNull(view);
    }

    @Test
    public void testRecyclerView() {
        RecyclerView recyclerView = view.findViewById(R.id.recyclerView);

        assertNotNull(recyclerView);
    }

    @Test
    public void testEditText() {
        EditText editText = view.findViewById(R.id.etSearch);

        assertEquals("", editText.getText().toString());
    }

    @Test
    public void testImageButton() {
        ImageButton imageButton = view.findViewById(R.id.ibAdd);

        assertNotNull(imageButton);
    }

    @After
    public void tearDown() throws Exception {
        appContext = null;
    }


}