import useSWR from 'swr';
import axios from 'axios';

const FetchAPItest = () => {

  const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.message)
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher)

  console.log(error);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div className="flex flex-col">
            {item.title}
            </div>
          )
        })
      }
    </div>
  )

}

export default FetchAPItest;