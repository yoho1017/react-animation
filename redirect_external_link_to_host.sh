#!/bin/bash

hosts=("k8s.monitor.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("kiali.monitor.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("logging.monitor.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("metrics.monitor.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("betengine.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("bo.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("bo.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("cdn.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("cdn.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("demoweb.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("demoweb.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("gameconsoleapi.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("gameconsoleapi.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("nc.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("nc.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("opc.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("opc.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("partnerapi.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("partnerapi.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("providercenter.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("providercenter.maintenance.xn--rcr21ak70l.club;127.0.0.1")
hosts+=("page.gdo74.com;127.0.0.1")
hosts+=("api.gdo74.com;127.0.0.1")
hosts+=("www.gdo74.com;127.0.0.1")
hosts+=("notification.gdo74.com;127.0.0.1")
hosts+=("bo.qca28.com;127.0.0.1")
hosts+=("opc.qca28.com;127.0.0.1")
hosts+=("cdn.qca28.com;127.0.0.1")
hosts+=("api.cda15.com;127.0.0.1")
hosts+=("api.tje71.com;127.0.0.1")
hosts+=("bo.qye92.com;127.0.0.1")
hosts+=("opc.qye92.com;127.0.0.1")
hosts+=("gameconsoleapi.qye92.com;127.0.0.1")
hosts+=("partnerapi.qye92.com;127.0.0.1")
hosts+=("maintenance.gdo74.com;127.0.0.1")
hosts+=("logging.jpi74.com;127.0.0.1")
hosts+=("metrics.jpi74.com;127.0.0.1")
hosts+=("tracing.jpi74.com;127.0.0.1")
hosts+=("config.jpi74.com;127.0.0.1")
hosts+=("largelog.jpi74.com;127.0.0.1")
hosts+=("deploy.jpi74.com;127.0.0.1")
hosts+=("tests.jpi74.com;127.0.0.1")


echo "Please enter your password if requested."
for host in ${hosts[@]}; do

    while IFS=';' read -ra ITEM; do
        host_name=${ITEM[0]}
        ip_address=${ITEM[1]}
        echo $host_name $ip_address

        matches_in_ip="$(grep -wn $host_name /etc/hosts | cut -f1 -d:)"
        host_entry="$ip_address $host_name"
        echo "host entry: $host_entry"

        if [[ ! -z "$matches_in_ip" ]]; then
            echo "Updating existing hosts entry."
            # iterate over the line numbers on which matches were found
            while read -r line_number; do
                # replace the text of each line with the desired host entry
                sudo sed -i '' "${line_number}s/.*/${host_entry} /" /etc/hosts
            done <<<"$matches_in_ip"
        else
            echo "Adding new hosts entry."
            echo "$host_entry" | sudo tee -a /etc/hosts >/dev/null
        fi

    done <<<"$host"
done