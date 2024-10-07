import React, { useContext } from 'react';
import { CartContext } from '../FunctionOfProducts/cartContext';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import NavBar from "../PartsOfPage/navBar";
import Footer from "../PartsOfPage/Footer";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const bg_status = false;

    // Calculate the total cost for all items in the cart
    const totalCartPrice = cart.reduce((total, item) => total + item.total, 0);
    console.log(cart)
    // Clear cart function
    const clearCart = () => {
        setCart([]);
    };

    // Define styles for the PDF document
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: '#f8f9fa',
        },
        header: {
            fontSize: 26,
            textAlign: 'center',
            marginBottom: 20,
            fontWeight:'extrabold'
        },
        table: {
            display: 'table',
            width: 'auto',
            marginBottom: 30,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCell: {
            borderBottom: '1px solid #ccc',
            padding: 10,
            fontSize: 12,
            textAlign: 'center'
        },
        total: {
            marginTop: 20,
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 20
        },
    });

    // Define the PDF document structure with professional text
const CartPDF = () => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.header}>Mousa</Text>
            <Text style={{fontSize: 14, textAlign: 'center', marginBottom:15}}>Mansoura - In front of Al Jazira Club</Text>
            {/* Professional Introduction */}
            <Text style={{ fontSize: 14, marginBottom: 10, textAlign: 'justify' }}>
                Thank you for choosing to shop with Mousa. Below is a summary of the items you've selected. 
                We value your trust and aim to provide an outstanding shopping experience.
                If you have any questions or concerns, feel free to contact our support team.
            </Text>

            {/* Table with cart details */}
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={{ ...styles.tableCell, width: '25%' }}>Product</Text>
                    <Text style={{ ...styles.tableCell, width: '25%' }}>Quantity</Text>
                    <Text style={{ ...styles.tableCell, width: '25%' }}>Price per item</Text>
                    <Text style={{ ...styles.tableCell, width: '25%' }}>Total Price</Text>
                </View>
                {cart.map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={{ ...styles.tableCell, width: '25%' }}>
                            {item.title.length > 25 ? item.title.slice(0, 24) + "..." : item.title}
                        </Text>
                        <Text style={{ ...styles.tableCell, width: '25%' }}>{item.count}</Text>
                        <Text style={{ ...styles.tableCell, width: '25%' }}>${item.price.toFixed(2)}</Text>
                        <Text style={{ ...styles.tableCell, width: '25%' }}>${item.total.toFixed(2)}</Text>
                    </View>
                ))}
            </View>

            {/* Total price and checkout text */}
            <Text style={styles.total}>Total Cart Price: ${totalCartPrice.toFixed(2)}</Text>
            <Text style={{ fontSize: 12, marginTop: 20, textAlign: 'justify' }}>
                Your total includes taxes and shipping, which will be calculated at the checkout.
                Once your order is confirmed, you'll receive a detailed receipt via email.
                We look forward to processing your order and delivering your items promptly.
            </Text>

            {/* Closing/Thank you text */}
            <Text style={{ fontSize: 20,fontWeight:'extrabold' ,  marginTop: 30, textAlign: 'center' }}>
                Thank you for choosing Mousa! We appreciate your business and hope to serve you again soon.
            </Text>
            </Page>
        </Document>
    );


    return (
        <>
            <div className="flex flex-col gap-10 justify-center">
                {/* NAVBAR */}
                <div className="h-20 sm:mb-28 mb-5">
                    <NavBar bg={bg_status} />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase font-bold sm:text-7xl text-3xl mb-5">Your Cart</h1>

                    <div className="container mx-auto w-full flex justify-center">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div className="sm:p-5 p-0 w-full max-w-full overflow-x-auto">
                                <table className="min-w-full border-collapse mb-10">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="border-b border-gray-300 p-4">Image</th>
                                            <th className="border-b border-gray-300 p-4">Product</th>
                                            <th className="border-b border-gray-300 p-4">Quantity</th>
                                            <th className="border-b border-gray-300 p-4">Price per item</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index} className="text-center hover:bg-gray-100">
                                                <td className="border-b border-gray-300 p-4">
                                                    <img src={item.img} alt={item.title} className="w-16 h-16 mx-auto" />
                                                </td>
                                                <td className="border-b border-gray-300 p-4 font-bold">
                                                    {item.title.length > 25 ? item.title.slice(0, 24) + "..." : item.title}
                                                </td>
                                                <td className="border-b border-gray-300 p-4">{item.count}</td>
                                                <td className="border-b border-gray-300 p-4">${item.price.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="text-xl font-bold text-center flex flex-col justify-center items-center">
                                    <p>Total Cart Price: ${totalCartPrice.toFixed(2)}</p>
                                    <p>Tax included and shipping calculated at checkout.</p>
                                    <div className="flex gap-6">
                                        <button>
                                            <PDFDownloadLink
                                                document={<CartPDF />}
                                                fileName="cart_summary.pdf"
                                                className="text-blue-500 underline"
                                            >
                                                {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
                                            </PDFDownloadLink>
                                        </button>
                                        <button
                                            className="text-red-500 underline"
                                            onClick={clearCart}
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mb-10">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Cart;
