package asdf;
import java.util.ArrayList;
import java.util.Arrays;
public class Az {
	public static int minimumTime(ArrayList<Integer> nums1, ArrayList<Integer> nums2, int x) {
        for(int i=0;i<nums1.size();i++){
          int sum=0;
          for(int j=0;j<nums1.size();j++){
            nums1.set(i,0);
            if(j!=i){
//              int s=	
              nums1.set(j,(nums1.get(j)+nums2.get(j)));
              // sum+=nums1[j];
              sum+=nums1.get(j);
            }
          }
          if(sum<=x){
            return i+1;
          }
        }
        return -1;
}
	public static void main(String[] args) {
		ArrayList<Integer> nums1=new ArrayList<>();
		ArrayList<Integer> nums2=new ArrayList<>();
		nums1.add(4);
		nums1.add(4);
		nums1.add(9);
		nums1.add(10);
		nums2.add(4);
		nums2.add(4);
		nums2.add(1);
		nums2.add(3);
		int a=minimumTime(nums1,nums2,16);
		System.out.println(a);

    }}
