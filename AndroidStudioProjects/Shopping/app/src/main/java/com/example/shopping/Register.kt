package com.example.shopping

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class Register : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        var registerbtn = findViewById<TextView>(R.id.register_btn)
        var username=findViewById<EditText>(R.id.register_email_input)
        var name=findViewById<EditText>(R.id.register_name_input)
        var password=findViewById<EditText>(R.id.register_password_input)
        var cpassword=findViewById<EditText>(R.id.register_cpassword_input)

        val sharedPreferences : SharedPreferences =  getSharedPreferences("Register_pref", Context.MODE_PRIVATE)

        var login=findViewById<TextView>(R.id.login)
        login.setOnClickListener{
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }


        var register=findViewById<TextView>(R.id.register_btn)
        register.setOnClickListener{
            if(username.getText().length > 0 && name.getText().length >0 && password.getText().length>0 && cpassword.getText().length>0 ) {



                val editor: SharedPreferences.Editor = sharedPreferences.edit()
                editor.putString("username", username.text.toString())
                editor.putString("name", name.text.toString())
                editor.putString("password", password.text.toString())
                editor.putString("cpassword", cpassword.text.toString())
                editor.commit()
                val intent = Intent(this, RecycleViewActivity::class.java)
                startActivity(intent)
            }
            else if(password.getText()!=cpassword.getText()){
                val toast=Toast.makeText(applicationContext,"password is not matched",Toast.LENGTH_SHORT)
                toast.show()
            }
            else{
                val toast=Toast.makeText(applicationContext,"Every field is required",Toast.LENGTH_SHORT)
                toast.show()
            }
        }
    }
}