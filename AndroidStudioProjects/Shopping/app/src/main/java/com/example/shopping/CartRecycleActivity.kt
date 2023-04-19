package com.example.shopping

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.shopping.RecycleViewActivity.Companion.cartItems

class CartRecycleActivity : AppCompatActivity() {


    var deleteList= arrayListOf<Int>()


    fun updateCardPrice(){
        var total_price=cartItems.fold(0.0f){acc, item -> acc + item.counts * item.price}

        val ordervalue = findViewById<TextView>(R.id.order_price)
        ordervalue.text=total_price.toString()
        val total = findViewById<TextView>(R.id.total_price)
        total.text=total_price.toString()
    }
    override fun onCreate(savedInstanceState: Bundle?) {


        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cart_recycle)



        var cartlistrview =findViewById<RecyclerView>(R.id.recyclecartitems)
        cartlistrview.layoutManager = LinearLayoutManager(this)
        cartlistrview.adapter = Cartadapter(this, RecycleViewActivity.cartItems)
        var backbtn = findViewById<ImageView>(R.id.backbtn)
        backbtn.setOnClickListener {
            finish()
        }

        var placebtn=findViewById<Button>(R.id.placeorderbtn)
        placebtn.setOnClickListener{
            val intent = Intent(this, Thankyou::class.java)
            startActivity(intent)

        }

        updateCardPrice()

    }


}
class Cartadapter(var context: Context, var cartList: MutableList<products>): RecyclerView.Adapter<Cartadapter.cartviewholder>() {
    class cartviewholder(itemview: View) : RecyclerView.ViewHolder(itemview) {
        var productCartTextView1 = itemview.findViewById<TextView>(R.id.name)
        var productCartTextView2 = itemview.findViewById<TextView>(R.id.type)
        var productCartTextView3 = itemview.findViewById<TextView>(R.id.price)
        var productCartImageView = itemview.findViewById<ImageView>(R.id.dress_img)
        var deleteBtn = itemview.findViewById<TextView>(R.id.delBtn)
        var spinnerItem = itemview.findViewById<Spinner>(R.id.spinner)
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewtype: Int):  cartviewholder{
        val view = LayoutInflater.from(context).inflate(R.layout.activity_cart,parent,false)
        return cartviewholder(view)
    }
    override fun onBindViewHolder(holder: cartviewholder, position: Int) {
        var cartmodel = cartList.get(position)
        holder.productCartTextView1.text = cartmodel.name
        holder.productCartTextView2.text = cartmodel.desc
        holder.productCartTextView3.text = cartmodel.price.toString()
        holder.productCartImageView.setImageResource(cartmodel.img)
        ArrayAdapter.createFromResource(
            context,
            R.array.sizes ,
            android.R.layout.simple_spinner_item
        ).also { adapter ->
            adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
            holder.spinnerItem.adapter = adapter
        }

        holder.spinnerItem.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {

                for (product in cartItems){
                    if(cartmodel.id==product.id){

                        val c= holder.spinnerItem.getSelectedItem().toString()
                        product.counts = c.toInt()
                    }
                }
                (context as CartRecycleActivity).updateCardPrice()

            }
            override fun onNothingSelected(p0: AdapterView<*>?) {

            }
        }




        holder.deleteBtn.setOnClickListener {
           cartList.removeAt(position)
            (context as CartRecycleActivity).updateCardPrice()
            notifyItemRemoved(position)
            val intent=Intent(context, RecycleViewActivity::class.java)


        }
    }
    override fun getItemCount(): Int {
        return RecycleViewActivity.cartItems.size
    }
}
data class CartItems(var id:Int, var name:String, val item : Int, val des : String,val img: Int, val price : String, val about : String )







