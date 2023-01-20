import java.sql.SQLOutput;
import java.util.*;
public class Main {
    public static void main(String[] args){
        Scanner in=new Scanner(System.in);
        int max=0;
        String bat=" ";
        int n = in.nextInt();
        for(int i=0;i<= n;i++)
        {
            String str=in.nextLine();
            //getting string (batmans,45)
            String name=" ";//for storing name
            int run=0;//for storing scores
            String arr[]=str.split(",");//array for storing the string after spliting it with comma,
            for(int j=0;j<arr.length;j++)//to seperate string and int..(j=0,j<2,j++)
            {
                if(j==0)
                {
                    name=arr[j];//to arr[j] index in name string.. arr[0]=batsman
                }
                else
                {
                    run=Integer.parseInt(arr[j]);//interger.parseInt used to convert string num in to int..and stores in run int.. arr[1] index is stored in run int..

                }
            }
            if(run>max) //(45>0).... for next rount if run =56..then.. (56>45)..then max will be changed to run value and name will be changed..
            {
                max=run;// max=run(45)
                bat=name;//bat=name(batsman)
            }
        }
        System.out.print(bat);

    }
}
