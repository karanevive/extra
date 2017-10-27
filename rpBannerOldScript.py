client_codes=upin.split('_')[1:-2]
print client_codes

for client_code in client_codes:
       try:
               if call_type.lower().strip()=="banner":
                       url="https://192.168.101.5:48802/recommender/banner/compute/{0}/{1}".format(upin,
                                                                               client_code)
                       r=requests.post(url ,verify=False)

               elif call_type.lower().strip()=="pcl":
                       url="https://192.168.101.5:48802/recommender/pcl/compute/upin?upin={0}&clientCode={1}".format(upin,
                                                                                               client_code)
                       r=requests.get(url, verify=False)

               else:
                       print "You naughty boiii  :-/ {0} is not an allowed call type, only \"pcl\" and \"banner\" are allowed! ".format(call_type)
                       sys.exit(1)

               if r.ok:
                       print "Success for {0}".format(url)
               else:
                       print "Failed for {0} with status code {1}".format(url,r.status_code)

       except Exception as e:
               print "Error occurred : %s" % (e.message)
