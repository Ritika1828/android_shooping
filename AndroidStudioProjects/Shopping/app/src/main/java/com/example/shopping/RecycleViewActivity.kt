package com.example.shopping

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.TextView
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView



class RecycleViewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_recycle_view)

        var Productlist = arrayListOf<products>()

        Productlist.add(products(1,"T-shirt",R.drawable.dress,"casuals",1000, "description", isadded = false, 1))
        Productlist.add(products(2,"T-shirt",R.drawable.dress1,"casuals",2000, "description" , isadded = false, 1))
        Productlist.add(products(3,"T-shirt",R.drawable.dress2,"casuals",1000 , "description", isadded = false, 1))
        Productlist.add(products(4,"T-shirt",R.drawable.img_1,"casuals",1000 , "description", isadded = false, 1) )
        Productlist.add(products(5,"T-shirt",R.drawable.img_2,"casuals",1000 , "description", isadded = false, 1))
        Productlist.add(products(6,"T-shirt",R.drawable.img_3,"casuals",1000, "description", isadded = false, 1))
        Productlist.add(products(7,"T-shirt",R.drawable.img_4,"casuals",1000 , "description", isadded = false, 1))
        Productlist.add(products(8,"T-shirt",R.drawable.img_5,"casuals",1000, "description", isadded = false, 1))
        Productlist.add(products(9,"T-shirt",R.drawable.img_6,"casuals",1000, "description", isadded = false, 1))
        Productlist.add(products(10,"T-shirt",R.drawable.img_7,"casuals",1000, "description", isadded = false, 1))







        var productlistrview =findViewById<RecyclerView>(R.id.productList)
        productlistrview.layoutManager = GridLayoutManager(this,2)
        productlistrview.adapter = productadapter(this,Productlist)

        val cart_button = findViewById<ImageView>(R.id.main_cart)
        cart_button.setOnClickListener {
            val intent = Intent(this, CartRecycleActivity::class.java)
            startActivity(intent)
        }



    }
    companion object{
        var cartItems = mutableListOf<products>()
    }


}

class productadapter(var context: Context,var Productlist:ArrayList<products>): RecyclerView.Adapter<productadapter.productviewholder>() {
    class productviewholder(itemview: View) : RecyclerView.ViewHolder(itemview) {
        var productnameview = itemview.findViewById<TextView>(R.id.text1)
        var productimageview = itemview.findViewById<ImageView>(R.id.img1)
        var productcategory=itemview.findViewById<TextView>(R.id.text2)
        var productprice=itemview.findViewById<TextView>(R.id.text3)
        var main = itemview.findViewById<View>(R.id.main)
        var add = itemview.findViewById<Button>(R.id.button)
        var cart=itemview.findViewById<View>(R.id.detail_cart)
        //var main_cart=itemview.findViewById<View>(R.id.main_cart)


    }



    override fun onBindViewHolder(holder: productviewholder, position: Int) {
        var productmodel = Productlist.get(position)




        if(productmodel.isadded==true){
            holder.add.text="GO to cart"
        }
        holder.productnameview.text = productmodel.name
        holder.productimageview.setImageResource(productmodel.img)
        holder.productcategory.text = productmodel.type
        holder.productprice.text = productmodel.price.toString()

        if(productmodel.isadded==false){
            holder.add.setOnClickListener{
                Productlist.get(position).isadded=true
                RecycleViewActivity.cartItems.add(productmodel)
                notifyItemChanged(position)




            }
        }
        else if(productmodel.isadded==true){
            holder.add.setOnClickListener {
//                val intent = Intent(context, CartRecycleActivity::class.java)
//                context.startActivity(intent)

            }
        }




        holder.main.setOnClickListener{
            var main_intent=Intent(context , DetailsActivity::class.java);
            main_intent.putExtra("img",productmodel.img)
            main_intent.putExtra("name",productmodel.name)
            main_intent.putExtra("price",productmodel.price)
            main_intent.putExtra("desc",productmodel.desc)


            context.startActivity(main_intent)
        }


    }

    

    override fun onCreateViewHolder(parent: ViewGroup, viewtype: Int):  productviewholder{
        val view =LayoutInflater.from(context).inflate(R.layout.activity_main,parent,false)
        return productviewholder(view)

    }


    override fun getItemCount(): Int {
        return Productlist.size
    }

}





data class products(var id:Int, var name:String, val img: Int,var type:String,var price:Int , var desc:String, var isadded:Boolean , var counts: Int)








