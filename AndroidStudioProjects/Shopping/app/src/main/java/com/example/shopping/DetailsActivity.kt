package com.example.shopping

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView

class DetailsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_details)

        var backbutton = findViewById<ImageView>(R.id.backbutton)
        backbutton.setOnClickListener {
            finish()
        }
        val detail_cart=findViewById<ImageView>(R.id.detail_cart)
        detail_cart.setOnClickListener{
            val intent = Intent(this, CartRecycleActivity::class.java)
            startActivity(intent)
        }




        val pimg=findViewById<ImageView>(R.id.img2)
        val pname=findViewById<TextView>(R.id.text1)
        val pprice=findViewById<TextView>(R.id.text2)
        val pdesc=findViewById<TextView>(R.id.text3)
        pimg.setImageResource(intent.getIntExtra("img",0))
        pname.text=(intent.getStringExtra("name"))
        pprice.text=(intent.getStringExtra("price"))
        pdesc.text=(intent.getStringExtra("desc"))
    }
}