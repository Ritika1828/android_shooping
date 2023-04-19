package com.example.shopping

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.preference.PreferenceManager
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

//        val sharedPreferenceGtter =  getSharedPreferences("Login_pref",Context.MODE_PRIVATE)
//        if(sharedPreferenceGtter.getString("username",null)!=null)
//        {
//
//        }

        var username=findViewById<EditText>(R.id.login_email_input)
        var password= findViewById<EditText>(R.id.login_password_input)

        var loginbtn=findViewById<TextView>(R.id.login_btn)
            loginbtn.setOnClickListener {

                if(username.getText().length>0 && password.getText().length>0) {

                    val sharedPreference = getSharedPreferences("Login_pref", Context.MODE_PRIVATE)
                    val editor: SharedPreferences.Editor = sharedPreference.edit()
                    editor.putString("username", username.text.toString())
                    editor.putString("password", password.text.toString())
                    editor.commit()
                    val intent = Intent(this, RecycleViewActivity::class.java)
                    startActivity(intent)
            }
                else{
                    val toast= Toast.makeText(applicationContext,"Every field is required", Toast.LENGTH_SHORT)
                    toast.show()
                }
        }



        var register=findViewById<TextView>(R.id.register)
        register.setOnClickListener{
            val intent = Intent(this, Register::class.java)
            startActivity(intent)
        }




    }
}